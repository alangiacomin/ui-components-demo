<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Mail\InfoTest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

//use Illuminate\Http\Request;

class HomeController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    //$this->middleware('auth');
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function index()
  {
    return view('home', ['user' => Auth::check() ? Auth::user()->fullData() : null]);
  }

  public function testMail()
  {
    Mail::to('alan.giacomin@gmail.com')
      ->send(new InfoTest());
  }
}
