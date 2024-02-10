import { configureStore } from '@reduxjs/toolkit'
import ListBahanMakanan from './reducer/ListBahanMakanan'

export default configureStore({
  reducer: {
    menus : ListBahanMakanan
  }
})