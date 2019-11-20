<template lang="pug">
  q-scroll-area(ref="scrollWrapper" style="height: calc(100vh);")
    infinite-loading(
      ref="infiniteLoading"
      @infinite="loadMore" direction="top" :distance="0" force-use-infinite-wrapper=".scroll"
      :top-scroll-pos="10"
    )
    q-chat-message(
      v-for="(msg, index) in messages"
      :key="`reg-${index}`"
      :label="msg.label"
      :sent="msg.sent"
      :text-color="msg.textColor"
      :bg-color="msg.bgColor"
      :name="msg.name"
      :avatar="msg.avatar"
      :text="msg.text"
      :stamp="msg.stamp"
    )
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
// import { Observable,of } from 'rxjs';
import InfiniteLoading, { StateChanger } from 'vue-infinite-loading';

@Component({
  components: { InfiniteLoading }
  // subscriptions: function(): Observables {return {
  //   ready$: this.device.ready$
  // }}
})
export default class ChatMessages extends Vue {
  private messages;
  private count = 0;

  constructor() {
    super();
  }

  loadMore($state: StateChanger) {
    console.log('loadMore')
    if (++this.count > 5) return $state.complete();

    this.messages = [
      {
        name: 'Abc'+this.count,
        text: ['How are you?'],
        avatar: 'statics/boy-avatar.png',
        stamp: 'Yesterday 13:34'
      },
      {
        name: 'Bbc'+this.count,
        text: ['How are you?'],
        avatar: 'statics/boy-avatar.png',
        stamp: 'Yesterday 13:34'
      },
      {
        name: 'Cbc'+this.count,
        text: ['How are you?'],
        avatar: 'statics/boy-avatar.png',
        stamp: 'Yesterday 13:34'
      },
      {
        name: 'Dbc'+this.count,
        text: ['How are you?'],
        avatar: 'statics/boy-avatar.png',
        stamp: 'Yesterday 13:34'
      },
      {
        name: 'Ebc'+this.count,
        text: ['How are you?'],
        avatar: 'statics/boy-avatar.png',
        stamp: 'Yesterday 13:34'
      },
    ].concat(this.messages);
    this.$nextTick(()=>$state.loaded());
  }
  data () {
    return {
      message: '',
      messages: [
        {
          label: 'Sunday, 18th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          textColor: 'white',
          bgColor: 'black',
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Saturday, 19th'
        },
        {
          name: 'Vladimir',
          bgColor: 'amber',
          textColor: 'white',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Sunday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Monday, 20th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Tuesday, 21th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Sunday, 19th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        },

        {
          label: 'Wednesday, 22th'
        },
        {
          name: 'Vladimir',
          text: ['How are you?'],
          avatar: 'statics/boy-avatar.png',
          stamp: 'Yesterday 13:34'
        },
        {
          name: 'Jane',
          text: ['I\'m good, thank you!', 'And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:50'
        },
        {
          name: 'Jane',
          text: ['And you?'],
          sent: true,
          avatar: 'statics/linux-avatar.png',
          stamp: 'Yesterday at 13:51'
        },
        {
          label: 'Thursday, 23th'
        },
        {
          name: 'Vladimir',
          text: ['Fine. Nice weather today, right?', 'Hmm...'],
          avatar: 'statics/boy-avatar.png',
          stamp: '13:55'
        }
      ]
    }
  }

}
</script>

<style lang="stylus">
// https://quasar-framework.org/components/stylus-variables.html
// @import '~variables'

</style>
