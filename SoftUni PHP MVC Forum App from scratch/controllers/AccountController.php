<?php

class AccountController extends BaseController {
	private $db;

	public function onInit() {
		$this -> titleTab = "Accounts";
		$this -> db = new AccountModel();
	}

	public function register() {
		if ($this -> isPost) {
			$username = $_POST['username'];

			if ($username == null || strlen($username) < 3) {
				$this -> addErrorMessage("Username must be not null and at least 3 charactars");
				$this -> redirect("account", "register");
			}

			$password = $_POST['password'];
			$isRegistered = $this -> db -> register($username, $password);

			if ($isRegistered) {
				$_SESSION['username'] = $username;
				$this -> addInfoMessage("Register success!");
				$this -> redirect("questions", "index");
			} else {
				$this -> addErrorMessage("Register failed!");
			}
		}

		$this -> renderView(__FUNCTION__);
	}

	public function login() {
		if ($this -> isPost) {
			$username = $_POST['username'];
			$password = $_POST['password'];

			$isLoggedIn = $this -> db -> login($username, $password);

			if ($isLoggedIn) {
				$_SESSION['username'] = $username;

				//TODO
				$isAdminInfo = $this -> db -> isAdmin($username, $password);
				$_SESSION['isAdmin'] = $isAdminInfo;

				$this -> addInfoMessage("Loggin success!");
				return $this -> redirectToUrl("/");
			} else {
				$this -> addErrorMessage("Login failed!");
			}
		}

		$this -> renderView(__FUNCTION__);
	}

	public function logout() {
		unset($_SESSION['username']);
		unset($_SESSION['isAdmin']);
		$this -> addInfoMessage("Logout success");
		$this -> redirectToUrl("/");
	}
}
