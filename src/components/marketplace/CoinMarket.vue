<template>
    <div class="container">
        <div class="row">

            <h1>Coin Marketplace</h1>

                <!-- Search input -->
                <input type="text" 
                class="form-control bg-dark text-light rounded-0 border-0 my-4" 
                placeholder="Search Coin..."
                @keyup="searchCoin()"
                v-model="textSearch"
                >

            <!-- Result table -->
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th v-for="title in titles" :key="title">
                            {{title}}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(coin, index) in filteredCoins" :key="coin.id">
                        <td>
                            {{index + 1}}
                        </td>
                        <td>
                            <div>
                                <img :src="coin.image" style="width: 1.7rem" class="me-2">
                            </div>
                        </td>
                        <td style="text-align: left">
                            
                            <span>
                                {{coin.name}}
                            </span>
                            <span class="ms-2 text-uppercase text-muted">
                                {{coin.symbol}}
                            </span>
                        </td>
                        <td>
                            ${{coin.current_price}}
                        </td>
                        <td :class="[coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger']">
                            {{coin.price_change_percentage_24h.toFixed(2)}} %
                        </td>
                        <td>
                            {{coin.total_volume.toLocaleString()}}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {

    name: 'CoinsComponent',
    
    data(){
        return {
            coins: [],
            filteredCoins: [],
            titles: [
                '#',
                '',
                'Coin',
                'Price',
                'Price Change',
                '24h Volume'
            ],
            textSearch: ""
        }
    },
    /* ON LOAD */
    // API: Coingekko

    async mounted(){
        const res = await fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        
        const data = await res.json();
        this.coins = data;
        this.filteredCoins = data;
        // setInterval(data.reload(true),2000); -> Refrescar datos en tiempo real
    },

    /* METHODS */
    methods: {
        searchCoin(){
            this.filteredCoins = this.coins.filter((coin) => 
            coin.name.toLowerCase().includes(this.textSearch.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(this.textSearch.toLowerCase())
            );
        },

    },

    
//Función para actualizar cada 4 segundos(4000 milisegundos)
  

}
</script>