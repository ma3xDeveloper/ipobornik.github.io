  <div class="categorie">
            <h1>All Questions</h1>
        </div>

<table border="0" cellspacing="5" cellpadding="5">
	<tr>
		<th>Id</th>
		<th>Title</th>
	</tr>
	
	<?php foreach ($this->questions as $question) :?>
		<tr>
			<td><?php echo $question[0] ?></td>
			<td><?php echo $question[1] ?></td>
		</tr>
	<?php endforeach; ?>
</table>

<ul class="pager">
  <li><a href="/questions/index/<?= $this->page -1 ?>/<?= $this->pageSize ?>">Previous</a></li>
  <li><a href="/questions/index/<?= $this->page +1 ?>/<?= $this->pageSize ?>">Next</a></li>
</ul>