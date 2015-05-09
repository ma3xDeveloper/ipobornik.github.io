 <div class="login-form">
            <form class="form-horizontal" action="/account/login" method="POST">
                <fieldset>
                    <legend>Login: </legend>
                    <div class="form-group">
                        <label for="username" class="col-lg-2 control-label">Username:</label>
                        <div class="col-lg-10">
                            <input class="form-control" id="username" name="username" placeholder="Username" type="text">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-lg-2 control-label">Password:</label>
                        <div class="col-lg-10">
                            <input class="form-control" id="password" name="password" placeholder="Password" type="password">

                        </div>
                    </div>
                   
                    <div class="form-group">
                        <div class="col-lg-10 col-lg-offset-2">
                            <button type="reset" class="btn btn-default">Reset</button>
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>