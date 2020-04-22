<?php

namespace App\Http\Middleware;

use Closure;

class CORS
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
    //  header_remove('Access-Control-Allow-Credentials');
    //   header_remove('Access-Control-Allow-Origin');
      //header('Access-Control-Allow-Origin: *');
//  header('Access-Control-Allow-Headers: Content-type, X-Auth-Token, Authorization, Origin, Accept, X-Requested-With');

  return $next($request);
    }
}
