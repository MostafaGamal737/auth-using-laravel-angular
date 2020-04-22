<?php
namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\User;
use App\Mail\resetmail;
use Carbon\Carbon;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','signup','ResetPassord','change_password']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'wrong email or password'], 401);
        }

        return $this->respondWithToken($token);
    }


    public function signup(Request $data)
    {
      $this->validate($data,
      [

      'email' => 'email|unique:users,email',
      'password' => 'confirmed'

    ]);
      $user=new User();
      $user->name=$data->name;
      $user->email=$data->email;
      $user->remember_token=uniqid();
      $user->password=bcrypt($data->password);
      $user->save();
      if ($user) {
        return response()->json(['success'=>'you are regesterd now'],202);
      }
      return response()->json(['Error'=>'you have an error'],404);
    }
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }
    public function ResetPassord(Request $data)
    {
      $user=(User::where('email', $data->email)->first());
      if ($user) {
        Mail::to($data->email)->send(new resetmail($user->remember_token));
        return response()->json(['success' => 'check your inpox'], 202);
      }
        return response()->json(['error' => 'it is not exist'], 404);
    }

    public function change_password(Request $data)
    {
      $this->validate($data,
      [
      'password' => 'confirmed'

    ]);
      $user=(User::where('remember_token', $data->remember_token)->first());
      if ($user) {
        $user->password=bcrypt($data->password);
        $user->email_verified_at=Carbon::now();
        $user->save();
        return response()->json(['success' => 'your passord changed Successfully'], 202);
      }
        return response()->json(['error' => 'some thing is wrong'], 404);
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }
}
