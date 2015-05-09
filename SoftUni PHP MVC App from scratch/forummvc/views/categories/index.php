  <div class="categorie">
            <h1>Categories</h1>
        </div>

         <?php foreach ($this->categories as $categorie) : ?>
            <div class="caregorie-button-box">
                <a href="/questions/filter/<?= $categorie['id'] ?>" class="btn btn-default btn-lg btn-block">  <?= htmlspecialchars($categorie['name']) ?> 
                </a>
                <a href="/categories/delete/<?= $categorie['id'] ?>" class="btn btn-primary btn-xs">Delete this categorie!</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus euismod velit, nec suscipit purus gravida et. Nullam mi ipsum, mollis iaculis risus sed, consectetur ornare mi. In faucibus egestas consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus euismod velit, nec suscipit purus gravida et. Nullam mi ipsum, mollis iaculis risus sed, consectetur ornare mi. In faucibus egestas consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus euismod velit, nec suscipit purus gravida et. Nullam mi ipsum, mollis iaculis risus sed, consectetur ornare mi. In faucibus egestas consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tempus euismod velit, nec suscipit purus gravida et. Nullam mi ipsum, mollis iaculis risus sed, consectetur ornare mi. In faucibus egestas consequat.</p>
            </div>

        <?php endforeach ?>

        <!-- Form -->
        <?php if($this->isLoggedIn && $this->isAdmin) :?>
        <form class="form-horizontal" method="post" action="/categories/create">
            <fieldset>
                <legend>Create New Categorie:</legend>
                <div class="form-group">
                    <label for="categorie_title" class="col-lg-2 control-label">Categorie Title:</label>
                    <div class="col-lg-10">
                        <input class="form-control" id="categorie_title" placeholder="Categorie Title" type="text" name="categorie_title">
                    </div>
                </div>

                <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default">Reset</button>
                        <button type="submit" class="btn btn-info">Create Categorie</button>
                    </div>
                </div>
            </fieldset>
        </form>
        <?php endif; ?>
