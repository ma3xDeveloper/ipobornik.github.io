<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <title>
        <?php if (isset($this->titleTab)) echo htmlspecialchars($this->titleTab) ?>
    </title>

<!--      <link rel="stylesheet" href="https://bootswatch.com/simplex/bootstrap.css" /> -->
     <link rel="stylesheet" href="/content/bootstrap.css" />
     <link rel="stylesheet" href="/content/styles.css" />
    
<!--  <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script> -->
      <script type="text/javascript" src="/content/jquery-2.1.4.js"></script>
      <script type="text/javascript"  src="/content/bootstrap.min.js"></script>
</head>

<body>
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/">Q&amp;A Forum</a>
                </div>

                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav">
                        <li><a class="menulink" href="/categories">Categories</a>
                        </li> 
                        <li><a class="menulink" href="/questions">All Questions</a>
                        </li>
                        <li><a href="#">Search</a>
                        </li>
                        <li><a href="#">Top Users</a>
                        </li>   
                    </ul>
                    <?php if($this->isLoggedIn) :?>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#">
                                <?php echo $_SESSION[ 'username']; ?>
                            </a>
                        </li>
                        <li><a href="account/logout">[logout]</a>
                        </li>
                    </ul>
                    <?php endif; ?>
                    <?php if(!$this->isLoggedIn) :?>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="account/register">Register</a>
                        </li>
                        <li><a href="account/login">Login</a>
                        </li>
                    </ul>
                    <?php endif; ?>
                </div>
            </div>
        </nav>
    </header>

        <div class="wrapper">
        
    <?php include ( 'messages.php'); ?>
    