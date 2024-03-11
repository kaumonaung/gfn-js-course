window.addEventListener('DOMContentLoaded', init)

function init() {
	new CoinFlipManager()
}

function CoinFlipManager() {
    const DEFAULT_COLOR = 'text-white'
    const DEFAULT_COLOR_BORDER = 'dark:border-gray-700'
    const SELECTED_COLOR = 'text-blue-600'
    const SELECTED_COLOR_DARK = 'dark:text-blue-500'
    const SELECTED_COLOR_BORDER = 'border-blue-500'
    const coinHeadImage = document.getElementById('coin-head-image')
    const coinHeadText = document.getElementById('coin-head-text')
    const coinTailsImage = document.getElementById('coin-tails-image')
    const coinTailsText = document.getElementById('coin-tails-text')
    const coinFlipButton = document.getElementById('flip-coin-button')
    const clearButton = document.getElementById('clear-button')
    const historyHeadTemplate = document.getElementById('history-head-template')
    const historyTailsTemplate = document.getElementById('history-tails-template')

    const store = createStore({ history: [] }, reducer)

    function createStore(initialState, reducer) {
        const state = new Proxy(
            { value: initialState },
            {
                set(obj, prop, value) {
                    obj[prop] = value
                    updateUI()
                },
            },
        )

        function getState() {
            return { ...state.value }
        }

        function dispatch(action, data) {
            const prevState = getState()
            state.value = reducer(prevState, action, data)
        }

        return {
            getState,
            dispatch,
        }
    }

    function reducer(state, action, data) {
        switch (action) {
            case 'COIN_FLIP':
                state = {
                    history:
                        state.history.length > 4
                            ? [...state.history.splice(-4), data]
                            : [...state.history, data],
                }
                break
            case 'CLEAR':
                state = {
                    history: [],
                }
                break
        }
        return state
    }

    function updateUI() {
        const { history } = store.getState()

        if (history.length <= 0) {
            unselectCoin()
            clearHistory()
            return
        }

        updateSelectedCoin(history[history.length - 1])
        updateHistory(history)
    }

    function updateSelectedCoin(selectedCoin) {
        unselectCoin()
        selectCoin(selectedCoin)
    }

    function updateHistory(history) {
        clearHistory()
        setHistory(history)
    }
    // -------------------------------- EVENT HANDLER --------------------------------
    function handleCoinFlip(e) {
        e.preventDefault()
        e.target.blur()

        const coinFlipResult = flipCoin()
        store.dispatch('COIN_FLIP', coinFlipResult)
    }

    function handleClear(e) {
        e.preventDefault()
        e.target.blur()

        store.dispatch('CLEAR')
    }

    coinFlipButton.addEventListener('click', handleCoinFlip)
    clearButton.addEventListener('click', handleClear)
    // -------------------------------- FUNCTIONS --------------------------------

    function init() {
        deactivateTemplates()
        updateUI()
    }

    function deactivateTemplates() {
        historyHeadTemplate.style.display = 'none'
        historyTailsTemplate.style.display = 'none'
    }

    function flipCoin() {
        return Math.random() < 0.5 ? 'HEAD' : 'TAILS'
    }

    function unselectCoin() {
        coinHeadImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK)
        coinHeadImage.classList.add(DEFAULT_COLOR)
        coinHeadText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK)
        coinHeadText.classList.add(DEFAULT_COLOR)
        coinHeadImage.parentElement.classList.remove(SELECTED_COLOR_BORDER)
        coinHeadImage.parentElement.classList.add(DEFAULT_COLOR_BORDER)
        coinTailsImage.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK)
        coinTailsImage.classList.add(DEFAULT_COLOR)
        coinTailsText.classList.remove(SELECTED_COLOR, SELECTED_COLOR_DARK)
        coinTailsText.classList.add(DEFAULT_COLOR)
        coinTailsText.parentElement.classList.remove(SELECTED_COLOR_BORDER)
        coinTailsText.parentElement.classList.add(DEFAULT_COLOR_BORDER)
    }

    function selectCoin(selectedCoin) {
        const selectedCoinImage = selectedCoin === 'HEAD' ? coinHeadImage : coinTailsImage
        const selectedCoinText = selectedCoin === 'HEAD' ? coinHeadText : coinTailsText

        selectedCoinImage.classList.remove(DEFAULT_COLOR)
        selectedCoinText.classList.remove(DEFAULT_COLOR)
        selectedCoinImage.parentElement.classList.remove(DEFAULT_COLOR_BORDER)
        selectedCoinImage.classList.add(SELECTED_COLOR, SELECTED_COLOR_DARK)
        selectedCoinText.classList.add(SELECTED_COLOR, SELECTED_COLOR_DARK)
        selectedCoinImage.parentElement.classList.add(SELECTED_COLOR_BORDER)
    }

    function setHistory(history) {
        history.forEach(coin => {
            const newCoin =
                coin === 'HEAD' ? historyHeadTemplate.cloneNode(true) : historyTailsTemplate.cloneNode(true)
            newCoin.id = 'history-coin'
            newCoin.style.display = 'flex'
            historyHeadTemplate.parentNode.appendChild(newCoin)
        })
    }

    function clearHistory() {
        const historyCoins = Array.from(document.querySelectorAll('#history-coin'))
        historyCoins.forEach(coin => coin.remove())
    }

    init()
}
