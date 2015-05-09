<div class="categorie">
            <h1>The Question:</h1>
        </div>

        <?php foreach ($this->questionEntitys as $question): ?>

        <div class="question-box">
            <div class="list-group">
                <div class="list-group-item active">
                    <?= htmlspecialchars($question[ 'title']) ?>
                </div>
                <div class="list-group-item">
                    <?= htmlspecialchars($question[ 'text']) ?>
                </div>
                <a href="#" class="list-group-item">
                    <?= htmlspecialchars($question[ 'tags']) ?>
                </a>
            </div>

            <div class="edit-panel">
                <a href="/questions/edit/<?= $question['id'] ?>" class="btn btn-danger" <?php if(!($this->isLoggedIn)) :?>echo 'disabled';<?php endif; ?>>Edit</a>
                <!-- <a href="#" class="btn btn-danger disabled">Edit</a> -->
            </div>
        </div>

        <?php endforeach; ?>

        <h3>The Question Answers:</h3>

        <?php foreach ($this->questionAnswers as $answer): ?>
        <div class="answers-box">
            <div class="list-group">
                <div class="list-group-item">
                    <h4 class="list-group-item-heading"><?= htmlspecialchars($answer['author']) ?> says:</h4>
                    <p class="list-group-item-text">
                        <?= htmlspecialchars($answer[ 'text']) ?>
                    </p>
                </div>
            </div>
            <div class="edit-panel">
                <a href="/answers/edit/<?php echo $answer['id'] ?>" class="btn btn-danger">Edit</a>
                <a href="/answers/delete/<?= $this -> questionAnswers[0]['question_id'] ?>/<?=$question['id'] ?>" class="btn btn-primary">Delete</a>

                <!--  <a href="#" class="btn btn-danger disabled">Edit</a>
               <a href="#" class="btn btn-primary disabled">Delete</a> -->
            </div>
        </div>
        <?php endforeach; ?>

        <!-- Form -->
        <?php if($this->isLoggedIn) :?>
        <div class="create-answer-form">
            <form class="form-horizontal" method="post" action="/answers/create/<?= $this->questionAnswers[0]['question_id'] ?>">
                <fieldset>
                    <legend>Create New Answer:</legend>
                    <!-- <div class="form-group">
                        <label for="answer_author" class="col-lg-2 control-label">Author:</label>
                        <div class="col-lg-10">
                            <input class="form-control" id="answer_author" name="answer_author" placeholder="Author" type="text">
                        </div> -->
                    </div>

                    <div class="form-group">
                        <label for="answer_text" class="col-lg-2 control-label">Answer text:</label>
                        <div class="col-lg-10">
                            <textarea class="form-control" rows="3" id="answer_text" name="answer_text"></textarea>
                            <!-- <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span> -->
                        </div>
                    </div>


                    <div class="form-group">
                        <div class="col-lg-10 col-lg-offset-2">
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-info">Create</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <?php endif; ?>