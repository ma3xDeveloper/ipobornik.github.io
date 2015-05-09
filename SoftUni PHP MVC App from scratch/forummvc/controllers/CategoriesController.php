<?php

class CategoriesController extends BaseController {
	private $db;

	public function onInit() {
		$this -> titleTab = "Categories";
		$this -> db = new CategoriesModel();
	}

	public function index() {

		$this -> categories = $this -> db -> getAllCategories();

		$this -> renderView();
	}

	public function create() {
		$this -> authorizeUser();
		$this -> authorizeAdmin();

		if ($this -> isPost) {
			$categorie_title = $_POST['categorie_title'];

			if ($this -> db -> createCategorie($categorie_title)) {
				$this -> addInfoMessage("Categorie created.");

			} else {
				$this -> addErrorMessage("Cannot create categorie.");
			}
		}

		$url = "/categories";
		$this -> redirectToUrl($url);
	}

	public function delete($categorie_id) {
		$this -> authorizeUser();
		$this -> authorizeAdmin();

		if ($this -> db -> deleteCategorie($categorie_id)) {
			$this -> addInfoMessage("Categorie deleted.");
		} else {
			$this -> addErrorMessage("Cannot delete categorie!");
		}

		$url = "/categories/";
		$this -> redirectToUrl($url);
	}
}
