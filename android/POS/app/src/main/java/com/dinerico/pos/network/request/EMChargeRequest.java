package com.dinerico.pos.network.request;

import com.dinerico.pos.model.EMResponse;
import com.dinerico.pos.model.EMPayment;
import com.dinerico.pos.network.config.Router;
import com.octo.android.robospice.request.retrofit.RetrofitSpiceRequest;

import roboguice.util.temp.Ln;

/**
 * Created by josephleon on 10/11/14.
 */

public class EMChargeRequest extends RetrofitSpiceRequest<EMResponse, Router> {

  private EMPayment emPayment;

  public EMChargeRequest(EMPayment emPayment) {
    super(EMResponse.class, Router.class);
    this.emPayment = emPayment;
  }

  @Override
  public EMResponse loadDataFromNetwork() {
    Ln.d("Call web service ");
    return getService().chargeElectronicMoney(emPayment);
  }

  public String createCacheKey() {
    return "charge." + emPayment.toString();
  }
}
