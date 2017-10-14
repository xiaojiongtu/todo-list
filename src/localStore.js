/**
 * Created by lull on 2017/10/14.
 */
export function save(key, value){
    return window.localStorage.setItem(key,JSON.stringify(value))
}
export function load(key,value){
    return JSON.parse(window.localStorage.getItem(key))
}