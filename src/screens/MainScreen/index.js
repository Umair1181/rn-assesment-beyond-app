// imports
import React, {useState, useEffect} from 'react';
import {Text, FlatList, View} from 'react-native';
// ToolKit Imports
import {useDispatch, useSelector} from 'react-redux';

// Api calls
import {FetchData} from '../../requests/Products';

// global componenets
import {Layout, Header, Loader} from '../../components';
// Components
import CardItem from './cardItem';
import {Spacing} from '../../global';
import FooterItem from './footerItem';
import {Action_SetRecords} from '../../redux/dataReducer';
import {NavigationContainer} from '@react-navigation/native';
import Routes from '../../navigation/Routes';

const MainScreen = ({navigation}) => {
  // hooks redux
  const dispatch = useDispatch();
  const {data, totalRecords} = useSelector(state => state.records);
  // vairables --START--
  const [loading, setLoading] = useState(false);
  const [moreDataLoading, setMoreDataLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [scrollFlatList, setScrollEnd] = useState(false);

  // DIDMOUTING FUNCTION
  useEffect(() => {
    setLoading(true);
    FetchData(page, newData => {
      if (newData) {
        dispatch(Action_SetRecords(newData));
      }
      setLoading(false);
    });
    return () => {};
  }, []);

  //FUNCTION LOADING MORE DATA ITEMS
  const handleLoadMore = () => {
    if (!scrollFlatList && totalRecords > data?.length) {
      setMoreDataLoading(true);
      setPage(page + 1);
    }
  };

  useEffect(() => {
    FetchData(page, newData => {
      if (newData) {
        dispatch(Action_SetRecords(newData));
      }
      setMoreDataLoading(false);
      setScrollEnd(true);
    });
  }, [page]);

  const handlePressItem = item => {
    navigation.navigate(Routes.DETAIL_SCREEN, {
      productId: item.id,
    });
  };

  return (
    <Layout key={`LAYOUT_MAIN_SCREEN`}>
      {/* Header --START */}
      <Header key={`HEADER_MAIN_SCREEN`} headerText={'Main Screen'} />
      {/* Header --END */}

      {/* Getting Data API Processing --START */}
      <Loader key={`LOADER_MAIN_SCREEN`} loading={loading} />
      {/* Getting Data API Processing --END */}

      {/* DATA Redering IF DATA EXist --START */}
      {data && !loading && (
        <FlatList
          keyboardShouldPersistTaps="always"
          data={data}
          contentContainerStyle={{
            paddingHorizontal: Spacing.W_SV_20,
            marginTop: Spacing.W_SV_20,
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, index) => `item_${index}`}
          renderItem={({item, index}) => (
            <CardItem item={item} onPress={() => handlePressItem(item)} />
          )}
          initialNumToRender={10}
          onEndReachedThreshold={0.1}
          onMomentumScrollBegin={() => setScrollEnd(() => false)}
          onEndReached={() => handleLoadMore()}
          // onMomentumScrollEnd={()=> setScrollEnd(true)}
          ListFooterComponent={() => <FooterItem loading={moreDataLoading} />}
        />
      )}
      {/* DATA Redering IF DATA EXist --END */}

      {/* For Empty List --START-- */}
      {!data && !loading && <Text key={'LIST_RESPONSE'}> NO data </Text>}
      {/* For Empty List --END-- */}
    </Layout>
  );
};

export default MainScreen;
