import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// ToolKit Imports
import {useDispatch, useSelector} from 'react-redux';
// library imports
import {SliderBox} from 'react-native-image-slider-box';
// Api calls
import {FetchSingleProductData} from '../../requests/Products';
// global componenets
import {Layout, Loader} from '../../components';
import {Colors} from '../../global';

//
import SVG_STRINGS from '../../assets/svgs';
import SvgContainer from '../../components/app/svgContainer';
import {Action_SetProduct} from '../../redux/dataReducer';
import SwiperImages from './swiper';
import TextDetail from './textDetail';
import TotalPriceContainer from './totalPriceContainer';
const DetailScreen = ({route, navigation}) => {
  // route params
  const productId = route.params.productId;

  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);
  // state variables
  const [loading, setLoading] = useState(false);

  // Did mount Hook
  useMemo(() => {
    setLoading(true);
    FetchSingleProductData(productId, data => {
      data ? setProduct(data) : false;
      setLoading(false);
    });
    // will unmaount
    return () => {
      dispatch(Action_SetProduct(false));
    };
  }, []);

  return (
    <ScrollView style={{flex: 1}}>
      <Layout>
        {/* <Loader key={`LOADER_DETAIL_SCREEN`} loading={loading} /> */}
        {/* // Back Button --START-- */}
        {!loading && (
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <View
              style={{position: 'absolute', alignSelf: 'center', zIndex: 99}}>
              <SvgContainer svg={SVG_STRINGS.backIcon()} size={18} />
            </View>
          </TouchableOpacity>
        )}
        {/* // Back Button --END-- */}
        {/* // Image Slider --START-- */}
        <View style={{height: 300, width: '100%'}}>
          {!loading && product?.images && (
            <SwiperImages images={product.images} />
          )}
        </View>
        {/* // Image Slider --END-- */}
        {/* Product  Detail  */}
        <TextDetail product={product} setQuantity={setQuantity} />

        <TotalPriceContainer price={quantity * product.price} />
      </Layout>
    </ScrollView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    zIndex: 1,
    top: 30,
    left: 30,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
});
