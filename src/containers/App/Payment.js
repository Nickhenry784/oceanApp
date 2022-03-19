import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Alert, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import RNIap, {
  purchaseUpdatedListener,
  finishTransaction,
} from 'react-native-iap';
import dataBuys from './data/buys';
import dataSubs from './data/subs';
import { incrementTurn } from './actions';
import Button from './Button';
import { paymentStyle } from './style';

let purchaseUpdateSubscription = null;
const purchaseErrorSubscription = null;

function Payment() {
  const dispatch = useDispatch();
  const [buys, setBuys] = useState([]);
  const [subs, setSubs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialIAP = useCallback(async () => {
    try {
      setIsLoading(true);
      await RNIap.initConnection();
      await RNIap.flushFailedPurchasesCachedAsPendingAndroid();
      purchaseUpdateSubscription = purchaseUpdatedListener(purchase => {
        const receipt = purchase.purchaseToken;
        if (receipt) {
          finishTransaction(purchase, true)
            .then(() => {
              handleCompletePurchase(purchase.productId);
            })
            .catch(() => {
              Alert.alert('purchase is failed', 'the purchase is failed');
            });
        }
      });

      const ps = await RNIap.getProducts(dataBuys.map(item => item.sku));
      const s = await RNIap.getSubscriptions(dataSubs.map(item => item.sku));
      setBuys(ps);
      setSubs(s);
    } catch (err) {
      Alert.alert(err.message);
      // console.warn(err.code, err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initialIAP();
    return () => {
      if (purchaseUpdateSubscription) {
        purchaseUpdateSubscription.remove();
      }
      if (purchaseErrorSubscription) {
        purchaseErrorSubscription.remove();
      }
    };
  }, []);

  const handleCompletePurchase = productId => {
    switch (productId) {
      case dataBuys[0].sku:
        dispatch(incrementTurn(dataBuys[0].value));
        break;
      case dataBuys[1].sku:
        dispatch(incrementTurn(dataBuys[1].value));
        break;
      case dataBuys[2].sku:
        dispatch(incrementTurn(dataBuys[2].value));
        break;
      case dataBuys[3].sku:
        dispatch(incrementTurn(dataBuys[3].value));
        break;
      case dataSubs[0].sku:
        dispatch(incrementTurn(dataSubs[0].value));
        break;
      case dataSubs[1].sku:
        dispatch(incrementTurn(dataSubs[1].value));
        break;
      default:
        break;
    }
  };

  const handleRequestBuy = productId => {
    RNIap.requestPurchase(productId);
  };

  const handleRequestSub = productId => {
    RNIap.requestSubscription(productId);
  };

  return isLoading ? (
    <View style={paymentStyle.center}>
      <ActivityIndicator size="small" />
    </View>
  ) : (
    <>
      {dataBuys.map((buy, buyKey) => (
        <Button
          type="TURN"
          key={buyKey}
          item={buy}
          onClick={handleRequestBuy}
        />
      ))}
      {dataSubs.map((sub, subKey) => (
        <Button type="SUB" key={subKey} item={sub} onClick={handleRequestSub} />
      ))}
    </>
  );
}

Payment.propTypes = {};

export default Payment;
