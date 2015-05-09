<?php

if (isset($_SESSION['messages'])) {

	 foreach ($_SESSION['messages'] as $msg) {
		echo '<div class="' . $msg['type'] . '">';
		echo '<button type="button" class="close" data-dismiss="alert">×</button>';
		echo htmlspecialchars($msg['text']);
		echo '</div>';
	}
	
	unset($_SESSION['messages']);
}