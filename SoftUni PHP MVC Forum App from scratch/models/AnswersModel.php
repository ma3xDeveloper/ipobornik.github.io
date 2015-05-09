<?php

class AnswersModel extends BaseModel {

	public function getQuestionAnswers($question_id) {
		$statement = self::$db -> prepare("SELECT * FROM answers WHERE question_id = ?");
		$statement -> bind_param("i", $question_id);
		$statement -> execute();
		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}


	public function getQuestionById($question_id) {
		$statement = self::$db -> prepare("SELECT * FROM questions  WHERE id = ?");
		$statement -> bind_param("i", $question_id);
		$statement -> execute();
		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}

	public function getAnswerById($answer_id) {
		$statement = self::$db -> prepare("SELECT * FROM answers  WHERE id = ?");
		$statement -> bind_param("i", $answer_id);
		$statement -> execute();

		return $statement -> get_result() -> fetch_all(MYSQLI_ASSOC);
	}

	public function createAnswer($answer_author, $answer_text, $question_id) {
		//TODO Validation
		// if ($question_text == '' || $question_title == '') {
		// 			return false;
		// }

		$statement = self::$db -> prepare("INSERT INTO answers VALUES(?, ?, ?, ?)");
		$statement -> bind_param("dssd", (rand(10, 111111111)), $answer_author, $answer_text, $question_id);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}

	public function deleteAnswer($answer_id) {
		$statement = self::$db -> prepare("DELETE FROM answers WHERE id = ?");
		$statement -> bind_param("i", $answer_id);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}

	public function updateAnswer($answer_id, $answer_author, $answer_text) {
		//TODO Validation
		/*if ($name == '') {
		 return false;
		 }*/
		$statement = self::$db -> prepare("UPDATE answers SET author = ?, text = ? WHERE id = ?");
		$statement -> bind_param("ssi", $answer_author, $answer_text, $answer_id);
		$statement -> execute();
		return $statement -> errno == 0;
	}
}
