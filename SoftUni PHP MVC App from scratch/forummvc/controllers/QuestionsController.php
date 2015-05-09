<?php

class QuestionsController extends BaseController {
	private $db;

	public function onInit() {
		$this -> titleTab = "Questions";
		$this -> db = new QuestionsModel();
		

	}

	public function index($page = 0, $pageSize = 5) {
		//TODO chek if page is negative num

		$this -> page = $page;
		$this -> pageSize = $pageSize;

		$from = $page * $pageSize;

		$this -> questions = $this -> db -> getFilteredQuestions($from, $pageSize);

		$this -> renderView();
	}

	//TODO
	/*public function showQuestions() {
		$this -> questions = $this -> db -> getAll();
		$this -> renderView(__FUNCTION__, false);

	}*/

	public function filter($categorie_id) {

		$this -> categorieQuestions = $this -> db -> getQuestionsByCategorieId($categorie_id);

		$categorieNameArr = $this -> db -> getCategorieName($categorie_id);

		$this -> categorieName = $categorieNameArr[0]['name'];

		$this -> renderView("categoriequestion");

	}

	public function delete($categorie_id, $question_id) {
		$this -> authorizeUser();

		if ($this -> db -> deleteQuestion($question_id)) {
			$this -> addInfoMessage("Question deleted.");
		} else {
			$this -> addErrorMessage("Cannot delete question - they have posted answers!!!");
		}

		$url = "/questions/filter/$categorie_id";
		$this -> redirectToUrl($url);
	}

	public function edit($question_id) {
		$this -> authorizeUser();

		if ($this -> questionToEdit = $this -> db -> getQuestionById($question_id)) {

			$this -> renderView("editQuestion");

		} else {
			$this -> addErrorMessage("Cannot edit question.");

			$url = "/questions/filter/$categorie_id";
			$this -> redirectToUrl($url);
		}
	}

	public function create() {
		$this -> authorizeUser();

		if ($this -> isPost) {
			
			if (!isset($_POST['formToken']) || $_POST['formToken'] != $_SESSION['formToken']) {
          			 echo "Warning: CSRF attack!";
         			  exit;
       		}

			$question_title = $_POST['question_title'];
			$question_text = $_POST['question_text'];
			$question_tags = $_POST['question_tags'];
			$categorie_id = $_POST['categorie_id'];

			if ($this -> db -> createQuestion($question_title, $question_text, $question_tags, $categorie_id)) {
				$this -> addInfoMessage("Question created.");

			} else {
				$this -> addErrorMessage("Cannot create question.");
			}
		}

		$url = "/questions/filter/$categorie_id";
		$this -> redirectToUrl($url);
	}

	public function update($id) {
		$this -> authorizeUser();

		if ($this -> isPost) {
			$question_title = $_POST['question_title'];
			$question_text = $_POST['question_text'];
			$question_tags = $_POST['question_tags'];
			$question_id = $id;
			$categorie_id = $_POST['categorie_id'];

			if ($this -> db -> updateQuestion($question_id, $question_title, $question_text, $question_tags)) {
				$this -> addInfoMessage("Question edited.");

			} else {
				$this -> addErrorMessage("Cannot edit question.");
			}

			$url = "/questions/filter/$categorie_id";
			$this -> redirectToUrl($url);
		}
	}

}
