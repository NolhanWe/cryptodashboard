document.addEventListener('DOMContentLoaded', () => {
    initializeWidgets();
});

function initializeWidgets() {
    // Symbol Info Widget for Tether
    const symbolInfoWidgetScript = document.createElement('script');
    symbolInfoWidgetScript.type = 'text/javascript';
    symbolInfoWidgetScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
    symbolInfoWidgetScript.async = true;
    symbolInfoWidgetScript.innerHTML = JSON.stringify({
        "symbol": "BITSTAMP:USDTUSD",  // Adapted for Tether
        "colorTheme": "dark",
        "isTransparent": false,
        "locale": "fr",
        "largeChartUrl": "",
        "width": "100%",
        "height": "100%"
    });
    document.getElementById('symbol-info-widget').appendChild(symbolInfoWidgetScript);

    // Symbol Overview Widget for Tether
    const symbolOverviewWidgetScript = document.createElement('script');
    symbolOverviewWidgetScript.type = 'text/javascript';
    symbolOverviewWidgetScript.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    symbolOverviewWidgetScript.async = true;
    symbolOverviewWidgetScript.innerHTML = JSON.stringify({
        "symbols": [
            [
                "Bitstamp",
                "BITSTAMP:USDTUSD"  // If available, adapt to exchange
            ],
            [
                "Coinbase",
                "COINBASE:USDTUSD"  // If available, adapt to exchange
            ],
            [
                "Kraken",
                "KRAKEN:USDTUSD"    // If available, adapt to exchange
            ],
            [
                "Crypto.com",
                "CRYPTOCOM:USDTUSD"  // If available, adapt to exchange
            ],
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "400",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
        ]
    });
    document.getElementById('symbol-overview-widget').appendChild(symbolOverviewWidgetScript);
}
