import React from 'react'

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() => {
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem

    if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setItem(parsedItem)

    
  }, [])

  const saveItem = (newItem) => {
    try {
      localStorage.setItem(itemName, JSON.stringify(newItem))
      setItem(newItem)
    } catch (error) {
      setError(true)
    }
  }

  return {
    item,
    saveItem,
    error,
  }
}

export { useLocalStorage }
