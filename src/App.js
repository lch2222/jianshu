import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Globalstyle } from './style';
import { IconGlobalstyle } from './statics/iconfont/iconfont';
import Header from './common/header/index';
import Home from './pages/home';
// 这里需要加载loadable.js了
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';

// Provider是react-redux提供的一个核心API，它其实是个组件
import { Provider } from 'react-redux';
import store from './store';


class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 全局样式 */}
        <Globalstyle/>
        {/* 字体图标样式 */}
        <IconGlobalstyle />
        {/* Provider的意思是：这个提供器连接了store，那么这个Provider里面所有的组件都有能力获取到store里面的内容了 */}
        <Provider store={store}>
          <BrowserRouter>
            <Fragment>
              {/* 头部区域 */}
              <Header />
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/write" component={Write}></Route>
              {/* 第一种形式写法 */}
              <Route exact path="/detail/:id" component={Detail}></Route>
              {/* 第二种形式写法 */}
              {/* <Route exact path="/detail" component={Detail}></Route> */}
            </Fragment>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;
