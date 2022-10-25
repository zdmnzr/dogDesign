import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHandHoldingHand, fas, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Transition from './components/Transition/transition'
import Button from './components/Button/button'
import Alert from './components/Alert/alert'
import Input from './components/Input/input'
import Test from './components/Test/test'
import AutoComplete from './components/AutoComplete/autoComplete'
import { DataSourceType } from './components/AutoComplete/autoComplete'

library.add(fas)
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  const [value, setValue]: [string | undefined, any] = useState()
  const arr = [
    { value: 'qwertyuiop', num: 0 }, { value: 'ertgdfsv', num: 1 },
    { value: 'efewf', num: 2 }, { value: '555454', num: 3 },
    { value: 'uytr', num: 4 }, { value: 'jdsfs', num: 5 },
    { value: 'jhgd', num: 6 }, { value: 'asda', num: 7 },
    { value: 'wer', num: 8 }, { value: 'adds', num: 9 },
    { value: 'tyuh', num: 10 }, { value: 'adarrr', num: 11 },
  ];
  const arr2 = ['ssssdsd','wefrfs','effe','efwefws','wefertgt','efergreg'];
  // console.log(value)
  const fetch = (str: string) => {
    return arr.filter(item => {
      return item.value.includes(str);
    })
  }
  interface LakerPlayerProps {
    value: string;
    num: number;
  }
  const renderOption = (item: DataSourceType) => {
    const itemWithNum = item as DataSourceType<LakerPlayerProps>
    return (
      <div>
        <h1>
          {itemWithNum.value}
        </h1>
        <h2>{itemWithNum.num}</h2>
      </div>
    )
  }

  return (
    <div className="App">
      <Test></Test>

      <AutoComplete fetchSuggestions={(str) => fetch(str)} onSelect={(niu) => { alert(niu.value) }} renderOption={renderOption}></AutoComplete>
      <Input placeholder='123' value={value} onChange={(e) => { setValue(e.target.value) }}></Input>

      <header className="App-header">
        <div style={{ position: 'absolute', width: '500px', margin: 'auto' }} >
          <Alert title='niuniu' description='1234567890' ></Alert>
          <Alert title='niuniu' description='1234567890' type='danger'></Alert>
          <Alert title='niuniu' description='1234567890' type='success'></Alert>
        </div>

        {/* <Alert title='niuniu' description='1234567890'></Alert>
        <Alert title='niuniu' description='1234567890'></Alert>
        <Alert title='niuniu' description='1234567890'></Alert>
        <Alert title='niuniu' description='1234567890'></Alert>
        <Alert title='niuniu' description='1234567890'></Alert> */}


        <Menu defaultIndex='0' onSelect={(index) => { alert(index) }}>
          <MenuItem>
            cool link
          </MenuItem>
          <MenuItem disabled>
            cool link 2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              dropdown 1
            </MenuItem>
            <MenuItem>
              dropdown 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link 3
          </MenuItem>
        </Menu>
        <Button size="lg" onClick={() => { setShow(!show) }} > Toggle </Button>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
        >
          <div>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType="primary" size="lg">A Large Button </Button>
        </Transition>
      </header>
    </div>
  );
}

export default App;
