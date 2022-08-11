import { defineClientConfig } from '@vuepress/client';
import Card from '../components/card/index.vue';


export default defineClientConfig({
  enhance({ app }) {
    app.component(Card.name, Card);
  }
})