export function findObjectByKeyValue<T>(array: T[], key: keyof T, value: T[keyof T]): T | undefined {
    return array.find(obj => obj[key] === value);
  }
  
  export function getValueByKey<T>(obj: T, key: keyof T): T[keyof T] {
    return obj[key];
}