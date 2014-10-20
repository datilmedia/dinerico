package com.dinerico.pos.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.dinerico.pos.R;
import com.dinerico.pos.model.Order;
import com.dinerico.pos.network.config.ActivityBase;
import com.dinerico.pos.util.Utils;

public class SuccessfulSaleActivity extends ActivityBase {

  ViewHolder view;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_successful_sale);
    setUpActionBar();
    view = new ViewHolder();
  }

  private void setUpActionBar(){
    hideActionBarComponents();
    View actionBar = getLayoutInflater().inflate(R.layout.action_bar_single_tittle,
            null);
    TextView action = (TextView) actionBar.findViewById(R.id.tittle);
    String total = Utils.currencyFormatter(Order.getInstance().getTotal());
    action.setText(total);
    getActionBar().setCustomView(actionBar);
  }

  private void startSendReceiptActivity(){
    Intent intent = new Intent(this, ReceiptActivity.class);
    startActivity(intent);
  }

  private void startNewSale() {
    Intent intent = new Intent(this, ShopActivity.class);
    intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent
            .FLAG_ACTIVITY_CLEAR_TASK);
    startActivity(intent);
    Order.reset();
  }

  private class ViewHolder implements View.OnClickListener{
    public Button sendReceipt;
    public Button noThanks;

    public ViewHolder() {
      findViews();
    }

    private void findViews() {
      sendReceipt = (Button) findViewById(R.id.sendReceipt);
      noThanks = (Button) findViewById(R.id.noThanks);
      sendReceipt.setOnClickListener(this);
      noThanks.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
      switch (view.getId()){
        case R.id.sendReceipt:
          startSendReceiptActivity();
          break;
        case R.id.noThanks:
          startNewSale();
          break;
      }
    }
  }

}
