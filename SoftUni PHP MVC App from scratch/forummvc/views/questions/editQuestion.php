  <div class="edit-question-box">
            <form class="form-horizontal" method="post" action="/questions/update/<?= htmlspecialchars($this->questionToEdit[0]['id']) ?>">
                <fieldset>
                    <legend>Edit Question:</legend>
                    <div class="form-group">
                        <label for="question_title" class="col-lg-2 control-label">Original question Title:</label>
                        <div class="col-lg-10">
                             <textarea class="form-control" rows="3" id="question_title" name="question_title">
                                 <?= htmlspecialchars($this->questionToEdit[0]['title']) ?>
                             </textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="question_text" class="col-lg-2 control-label">Original question Text:</label>
                        <div class="col-lg-10">
                            <textarea class="form-control" rows="3" id="question_text" name="question_text">      
                            <?= htmlspecialchars($this->questionToEdit[0]['text']) ?>
                            </textarea>
                            <!-- <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span> -->
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="question_tags" class="col-lg-2 control-label">Original question Tags:</label>
                        <div class="col-lg-10">
                            <input class="form-control" id="question_tags" name="question_tags" placeholder="QuestionTags" type="text" value="<?= htmlspecialchars($this->questionToEdit[0]['tags']) ?>">
                        </div>
                    </div>
                    
                    <input type="hidden" name="categorie_id" value="<?= htmlspecialchars($this->questionToEdit[0]['categorie_id']) ?>">

                    <div class="form-group">
                        <div class="col-lg-10 col-lg-offset-2">
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-info">Edit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>