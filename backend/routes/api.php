<?php

Route::group([


    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('ResetPassord', 'AuthController@ResetPassord');
    Route::post('change_password', 'AuthController@change_password');

});
