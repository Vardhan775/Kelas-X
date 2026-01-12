<h1>Login</h1>
<form action="" method="POST">
    <input type="email" name="email" placeholder="email" required><br/>
    <input type="password" name="password" placeholder="password"><br/>
    <input type="submit" value="login" name="login">
</form>

<?php 
    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        // echo $email . "<br/>";
        // echo $password;

        if ($email == "eeeedayat@gmail.com" && $password = "1234567890") {
            $_SESSION['email'] = $email;
            //echo "Login Berhasil";
            header("location: index.php");
        }else{
            echo "Email atau Password salah";
        }
    }

?>