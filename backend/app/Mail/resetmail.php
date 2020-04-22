<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class resetmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
     public $token;
    public function __construct($token)
    {
        $this->token=$token;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
          return $this->view('mail',['token'=>$this->token])->from('2e1d1bc4434e87@gmail.come',['name'=>'admin']);
    }
}
