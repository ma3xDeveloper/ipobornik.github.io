<?php

class CategoriesModel extends BaseModel {
	public function getAllCategories() {
		$statement = self::$db -> query("SELECT * FROM categories");
		return $statement -> fetch_all(MYSQLI_ASSOC);
	}

	public function createCategorie($categorie_title) {

		//TODO
		// if ($question_text == '' || $question_title == '') {
		// 			return false;
		// }

		$statement = self::$db -> prepare("INSERT INTO categories VALUES(?)");
		$statement -> bind_param("s", $categorie_title);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}

	public function deleteCategorie($categorie_id) {
		$statement = self::$db -> prepare("DELETE FROM categories WHERE id = ?");
		$statement -> bind_param("i", $categorie_id);
		$statement -> execute();
		return $statement -> affected_rows > 0;
	}
}


