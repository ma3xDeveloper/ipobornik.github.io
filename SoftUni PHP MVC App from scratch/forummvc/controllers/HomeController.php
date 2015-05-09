<?php

class HomeController extends BaseController {

	public function onInit() {
		$this -> titleTab = "Home";
	}

	public function index() {
		$this -> renderView();
	}
}
