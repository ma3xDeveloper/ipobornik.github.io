<div class="categorie">
            <h1><?= htmlspecialchars($this->categorieName) ?> Questions</h1>
        </div>

        <?php foreach ($this->categorieQuestions as $question): ?>
        <div class="categorie-questions">
            <ul class="nav nav-pills">
                <li>Answers <span class="badge">3</span>
                </li>
            </ul>
            <div class="list-group">
                <a href="/answers/filter/<?= $question['id'] ?>" class="list-group-item active"><strong><?= htmlspecialchars($question['title']) ?></strong></a>
            </div>
            <div class="edit-panel">
                    <a href="/questions/edit/<?= $question['id'] ?>" class="btn btn-danger">Edit</a>
                    <a href="/questions/delete/<?= $this -> categorieQuestions[0]['categorie_id'] ?>/<?=$question['id'] ?>" class="btn btn-primary">Delete</a>

                    <!--  <a href="#" class="btn btn-danger disabled">Edit</a>
                   <a href="#" class="btn btn-primary disabled">Delete</a> -->
            </div>
        </div>



        <?php endforeach; ?>

        <!-- Form -->
        <?php if($this->isLoggedIn) :?>
        <form class="form-horizontal" method="post" action="/questions/create">
            <fieldset>
                <legend>Create New Question in this Categorie:</legend>
                <div class="form-group">
                    <label for="question_title" class="col-lg-2 control-label">Question Title:</label>
                    <div class="col-lg-10">
                        <input class="form-control" id="question_title" placeholder="QuestionTitle" type="text" name="question_title">
                    </div>
                </div>
                <div class="form-group">
                    <label for="question_text" class="col-lg-2 control-label">Qquestion Text:</label>
                    <div class="col-lg-10">
                        <textarea class="form-control" rows="3"  id="question_text"  name="question_text"></textarea>
                        <!-- <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span> -->
                    </div>
                </div>
                <div class="form-group">
                    <label for="question_tags" class="col-lg-2 control-label">Question Tags:</label>
                    <div class="col-lg-10">
                        <input class="form-control" id="question_tags" name="question_tags" placeholder="QuestionTags" type="text">
                    </div>
                </div>

                 <input id="categorie_id" , type="hidden" name="categorie_id" value="<?= $this -> categorieQuestions[0]['categorie_id'] ?>" />
                
                <input type="hidden" name="formToken" value="<?php echo $_SESSION['formToken'] ?>"/>
                
                <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default">Reset</button>
                        <button type="submit" class="btn btn-info">Create Question</button>
                    </div>
                </div>
            </fieldset>
        </form>
        <?php endif; ?>
