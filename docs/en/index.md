---
layout: home
layoutClass: 'm-home-layout'

hero:
  name: MCJPG
  text: MC Server Exchange Organization
  tagline: An organization dedicated to Minecraft technical communication and server promotion</br>Whether you're a player or a server owner, this is an excellent community for communication!
  image:
    src: /logo.png
    alt: MCJPG Organization
  actions:
    - text: Join Group
      link: https://qm.qq.com/q/bAZle5ABzy
    - theme: sponsor
      text: MC Nav
      link: /en/nav/
    - theme: sponsor
      text: Columns
      link: /en/press/

features:
  - icon:
      src: /logo.png
    title: Instruction
    details: Please go to the Chinese page for the list of servers
    link: /
    linkText: Go!

---

<style>
/*爱的魔力转圈圈*/
.m-home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(666turn);
  transition: transform 59s 1s cubic-bezier(0.3, 0, 0.8, 1);
}

.m-home-layout .details small {
  opacity: 0.8;
}

.m-home-layout .bottom-small {
  display: block;
  margin-top: 2em;
  text-align: right;
}
</style>
<script>
export default {
  mounted() {
    this.shuffleElements();
    // 如果确实需要在挂载后调用 reload() 方法，确保该方法已经定义
    // this.reload();
  },
  methods: {
    shuffleElements() {
      const elements = Array.from(document.querySelectorAll('div.VPFeatures .container .items .item'));
      const parent = document.querySelector('div.VPFeatures .container .items');

      for (let i = elements.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = elements[i];
        elements[i] = elements[j];
        elements[j] = temp;
      }

      // 清空父元素并将重新排序后的元素添加到父元素中
      parent.innerHTML = '';
      elements.forEach(element => {
        parent.appendChild(element);
      });
    }
  }
}
</script>
<confetti />
