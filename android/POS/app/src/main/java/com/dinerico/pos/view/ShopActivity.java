package com.dinerico.pos.view;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import com.dinerico.pos.R;
import com.dinerico.pos.db.ProductDB;
import com.dinerico.pos.model.Product;
import com.dinerico.pos.network.config.ActivityBase;
import com.dinerico.pos.viewmodel.ShopViewModel;

import java.util.ArrayList;

import rx.android.Events;
import rx.functions.Action1;

public class ShopActivity extends ActivityBase {

  private ShopViewModel viewModel;
  private ViewHolder view;

  private ProductsListViewAdapter adapter;

  private final static String CART = "cart";

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_shop);
    viewModel = new ShopViewModel(new ProductDB(this));
    view = new ViewHolder();
    showProductList();
  }

  private void showProductList() {
    if (!viewModel.getCatalog().isEmpty()) {
      view.addImage.setVisibility(View.GONE);
      view.productList.setVisibility(View.VISIBLE);
    }
  }

  @Override
  protected void onResume() {
    super.onResume();
    ArrayList<Product> catalog = viewModel.getCatalog();
    if (catalog.size() > 0) {
      view.addImage.setVisibility(View.INVISIBLE);
      view.productList.setVisibility(View.VISIBLE);
      adapter = new ProductsListViewAdapter(this, viewModel.getCatalog());
      view.productList.setAdapter(adapter);
    } else {
      view.addImage.setVisibility(View.VISIBLE);
      view.productList.setVisibility(View.INVISIBLE);
    }

  }

  private void startCatalog() {
    Intent intent = new Intent(this, CatalogActivity.class);
    startActivity(intent);
  }


  private void startCart() {
    Intent intent = new Intent(this, CartActivity.class);
    intent.putExtra(CART, viewModel.getCart());
    startActivity(intent);
  }

  @Override
  public boolean onCreateOptionsMenu(Menu menu) {
    getMenuInflater().inflate(R.menu.shop, menu);
    return true;
  }

  @Override
  public boolean onOptionsItemSelected(MenuItem item) {
    switch (item.getItemId()) {
      case R.id.addProduct:
        startCatalog();
        return true;
      default:
        return super.onOptionsItemSelected(item);
    }
  }

  private class ViewHolder implements View.OnClickListener,
          AdapterView.OnItemClickListener {
    public EditText search;
    public View actualSalesButton;
    public ListView productList;
    public View addImage;

    public ViewHolder() {
      findViews();
      subscribeToViewComponents();
    }

    private void findViews() {
      search = (EditText) findViewById(R.id.search);
      actualSalesButton = findViewById(R.id.actualSalesButton);
      actualSalesButton.setOnClickListener(this);
      addImage = findViewById(R.id.addImage);
      productList = (ListView) findViewById(R.id.listView);
      productList.setOnItemClickListener(this);
      adapter = new ProductsListViewAdapter(ShopActivity.this,
              viewModel.getCatalog());
      productList.setAdapter(adapter);
    }

    private void subscribeToViewComponents() {

      Events.text(search).subscribe(new Action1<String>() {
        @Override
        public void call(String string) {
          viewModel.setSearch(string);
          adapter.filter(string);
        }
      });

    }

    @Override
    public void onClick(View view) {
      startCart();
    }

    @Override
    public void onItemClick(AdapterView<?> adapterView, View view,
                            int position,
                            long l) {
      Product product = viewModel.getCatalog().get(position);
      viewModel.getCart().add(product);
      Toast.makeText(ShopActivity.this, "Producto agregado",
              Toast.LENGTH_LONG).show();
    }
  }


}
