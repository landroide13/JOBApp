
import * as SQLite from 'expo-sqlite'

export const DatabaseConnection = {
    getConnection:()=> SQLite.openDatabase('jobs01.db')
}