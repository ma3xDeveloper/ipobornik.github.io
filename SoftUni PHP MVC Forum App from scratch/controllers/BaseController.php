<?php


header("Content-Type: text/html; charset=utf-8");

abstract class BaseController {
	protected $controllerName;
	protected $layoutName = DEFAULT_LAYOUT;
	protected $isViewRendered = false;
	protected $isPost = false;
	protected $isLoggedIn = false;
	protected $isAdmin = false;

	function __construct($controllerName) {
		$this -> controllerName = $controllerName;
		$_SESSION['FromToken'] = hash('sha256', microtime());

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$this -> isPost = true;
		}

		if (isset($_SESSION['username'])) {
			$this -> isLoggedIn = true;
		}

		if (isset($_SESSION['username']) && isset($_SESSION['isAdmin'])) {
			if ($_SESSION['isAdmin'] == 1) {
				$this -> isAdmin = true;
			}
		}

		$this -> onInit();
	}

	public function onInit() {
		// Implement initializing logic in the subclasses
	}

	public function index() {
		// Implement the default action in the subclasses
	}

	public function renderView($viewName = "Index", $includeLayout = true) {
		if (!$this -> isViewRendered) {

			$viewFileName = 'views/' . $this -> controllerName . '/' . $viewName . '.php';

			if ($includeLayout) {
				$headerFile = 'views/layouts/' . $this -> layoutName . '/header.php';
				include_once ($headerFile);
			}

			include_once ($viewFileName);

			if ($includeLayout) {
				$footerFile = 'views/layouts/' . $this -> layoutName . '/footer.php';
				include_once ($footerFile);
			}

			$this -> isViewRendered = true;
		}
	}

	public function redirectToUrl($url) {
		header("Location: " . $url);
		die ;
	}

	public function redirect($controllerName, $actionName = null, $params = null) {
		$url = '/' . urlencode($controllerName);

		if ($actionName != null) {
			$url .= '/' . urlencode($actionName);
		}

		if ($params != null) {
			$encodedParams = array_map($params, 'urlencode');
			$url .= implode('/', $encodedParams);
		}
		$this -> redirectToUrl($url);
	}

	public function authorizeUser() {
		if (!$this -> isLoggedIn) {
			$this -> addErrorMessage("Please login");
			$this -> redirect("account", "login");
		}
	}

	public function authorizeAdmin() {
		if (!$this->isAdmin) {
			$this -> addErrorMessage("Administrator accsess!");
			$this -> redirect("account", "login");
		}
	}

	function addMessage($msg, $type) {
		if (!isset($_SESSION['messages'])) {
			$_SESSION['messages'] = array();
		};

		array_push($_SESSION['messages'], array('text' => $msg, 'type' => $type));
	}

	function addInfoMessage($msg) {
		$this -> addMessage($msg, 'alert alert-dismissible alert-success');
	}

	function addErrorMessage($msg) {
		$this -> addMessage($msg, 'alert alert-dismissible alert-danger');
	}
}
