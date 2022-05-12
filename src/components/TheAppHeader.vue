<template>
  <header class="header">
    <the-container class="header_container">
      <the-logo-main/>
      <header-nav-link
          v-for="(navLink, i) in navLinks"
          :key="i"
          :url="navLink.url"
          :name="navLink.label"
      />
      <the-user-bar>
        <the-currency-selector
            :options="options"
            @select="optionSelect"
            :selected="selected"
        />
        <divider-vertical/>
        <the-user-card/>
      </the-user-bar>
    </the-container>
  </header>
</template>

<script>
import TheUserBar from "@/components/TheUserBar";
import TheCurrencySelector from "@/components/TheCurrencySelector.vue";
import TheLogoMain from "@/components/TheLogoMain.vue";
import HeaderNavLink from "@/components/HeaderNavLink.vue";
import DividerVertical from "@/components/DividerVertical.vue";
import DividerHorizontal from "@/components/DividerHorizontal.vue";
import TheUserCard from "@/components/TheUserCard.vue";
import TheDropdownUser from "@/components/TheDropdownUser.vue";
import DropdownUserListItem from "@/components/DropdownUserListItem.vue";

export default {
  name: "TheAppHeader",
  components:{
    TheCurrencySelector,
    TheLogoMain,
    HeaderNavLink,
    DividerVertical,
    TheUserCard,
    TheDropdownUser,
    DropdownUserListItem,
    DividerHorizontal,
    TheUserBar
  },
  data() {
    return {
      selected:'',
      options:[
        {
          name:'$USD', value:'usd'
        },
        {
          name:'€EUR', value:'eur'
        },
      ],
      navLinks: [
        {
          label: 'Mediation',
          url: '/'
        },
        {
          label: 'My payments',
          url: '/mypayments'
        },
        {
          label: 'Applications',
          url: '/applications'
        },
        {
          label: 'Creatives',
          url: '/creatives'
        },
        {
          label: 'Cross Promo Campaigns',
          url: '/crosspromocampaigns'
        },
      ],
      userDropdownVisible:true,
    }
  },
  methods:{
    optionSelect(option){
      this.selected=option.name
    },
  },
  // mounted() {
  //   document.addEventListener('click',this.hideUserDropdown.bind(this), true)
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click',this.hideUserDropdown)
  // }
}
</script>

<style scoped lang="scss">
.header{
  display: flex;
  align-items: center;
  height: 75px;
  box-shadow: 4px 4px 20px rgba(0, 8, 81, 0.1);
  &_container{
    align-items: center;
  }
}


</style>