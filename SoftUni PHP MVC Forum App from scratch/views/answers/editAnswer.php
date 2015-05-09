<div class="edit-answer-box">
            <form class="form-horizontal" method="post" action="/answers/update/<?= htmlspecialchars($this->answerToEdit[0]['id']) ?>">
                <fieldset>
                    <legend>Edit Answer:</legend>

                    <div class="form-group">
                        <label for="answer_text" class="col-lg-2 control-label">Original answer Text to edit:</label>
                        <div class="col-lg-10">
                            <textarea class="form-control" rows="3" id="answer_text" name="answer_text">
                                <?= htmlspecialchars($this->answerToEdit[0]['text']) ?>
                            </textarea>
                            <!-- <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span> -->
                        </div>
                    </div>

                          <input type="hidden" name="question_id" value="<?= htmlspecialchars($this->answerToEdit[0]['question_id']) ?>">
                    
                    <div class="form-group">
                        <div class="col-lg-10 col-lg-offset-2">
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-info">Edit</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>