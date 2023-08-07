<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class AuthController extends Controller
{
    protected $users;
    public function __construct()
    {
        $this->users = new User();
    }
    public function signin()
    {
        $data = [
            "title " => "Sign In",
        ];
        return Inertia::render("Auth/Signin", $data);
    }
    public function check(Request $request)
    {
        $userdata = array(
            'username' => $request->input('username'),
            'password' => $request->input('password'),
        );
        // attempt to do the login
        if (Auth::attempt($userdata)) {
            $request->session()->regenerate();
            return response()->json([
                "login" => "1",
                "msg" => "Berhasil Login",
            ]);
        } else {
            // validation not successful, send back to form
            return response()->json([
                "login" => "0",
                "msg" => "Username atau password anda salah !",
            ]);
        }
    }
    public function signup()
    {
        $data = [
            "title " => "Sign Up",
        ];
        return Inertia::render("Auth/Signup", $data);
    }
    public function store(Request $request)
    {
        $data = $request->all();
        $check = $this->create($data);
    }
    function new (Request $request) {
        $data = [
            "title " => "Register page",
        ];
        $data = [

            "first_name" => $request->input('first_name'),
            "last_name" => $request->input('last_name'),
            "username" => $request->input('username'),
            "password" => Hash::make($request->input('password')),
            "email" => $request->input('email'),
            "handphone" => $request->input('handphone'),
        ];
        $res = $this->users::create($data);
        if ($res) {
            return response()->json([
                "msg" => "Success",
                "code" => 201,
            ]);
        } else {
            return response()->json([
                "msg" => "Success",
                "code" => 201,
            ]);
        }

        // return Inertia::render("Auth/register", $data);
    }
    public function signout()
    {
        auth()->logout();

        return redirect('/signin');
    }
}
