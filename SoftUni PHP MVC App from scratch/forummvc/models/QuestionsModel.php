<?php

class QuestionsModel extends BaseModel {
	/*public function getAll() {
		$statement = self::$db -> query("SELECT id, title FROM questions");
		$result = $statement -> fetch_all();
		return $result;
	}*/

	public function getQuestionById($question_id) {
		$statement = self::$db -> prepare("SELECT * FROM questions  WHERE id = ?");
		$statement -> bind_param("i", $question_id);
		$statement -> execute();
		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}

	public function getFilteredQuestions($from, $size) {
		$statement = self::$db -> prepare("SELECT id, title FROM questions LIMIT ?, ?");
		$statement -> bind_param("ii", $from, $size);
		$statement -> execute();
		$result = $statement -> get_result() -> fetch_all();
		return $result;
	}

	public function getQuestionsByCategorieId($categorie_id) {
		$statement = self::$db -> prepare("SELECT * FROM questions WHERE categorie_id = ?");
		$statement -> bind_param("i", $categorie_id);
		$statement -> execute();
		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}

	public function getCategorieName($id) {
		$statement = self::$db -> prepare("SELECT * FROM categories WHERE id = ?");
		$statement -> bind_param("i", $id);
		$statement -> execute();
		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}

	public function createQuestion($question_title, $question_text, $question_tags, $categorie_id) {

		if ($question_title == '' || $question_text == '') {
					return false;
		}

		$statement = self::$db -> prepare("INSERT INTO questions VALUES(?, ?, ?, ?, ?)");
		$statement -> bind_param("dsssd", (rand(10, 111111111)), $question_title, $question_text, $question_tags, $categorie_id);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}

	public function deleteQuestion($question_id) {
		$statement = self::$db -> prepare("DELETE FROM questions WHERE id = ?");
		$statement -> bind_param("i", $question_id);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}

	public function updateQuestion($question_id, $question_title, $question_text, $question_tags) {

		if ($question_title == '' || $question_text == '') {
					return false;
		}

		$statement = self::$db -> prepare("UPDATE questions SET title = ?, text = ?, tags = ? WHERE id = ?");
		$statement -> bind_param("sssi", $question_title, $question_text, $question_tags, $question_id);
		$statement -> execute();
		return $statement -> errno == 0;
	}

}
