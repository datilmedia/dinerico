package com.dinerico.pos.view;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import com.dinerico.pos.R;
import com.dinerico.pos.network.config.ActivityBase;


public class WelcomeActivity extends ActivityBase {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_welcome);

    new Handler().postDelayed(new Runnable() {
      @Override
      public void run() {
        Intent mainIntent = new Intent(WelcomeActivity.this,
                ShopActivity.class);
        startActivity(mainIntent);
        finish();
      }
    }, SplashActivity.SPLASH_DISPLAY_LENGTH);
  }

}
