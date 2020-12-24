<template>
  <footer id="main-footer">
    <div class="footer container">
        <div class="main-footer-1">
            <div class="footer-1">
                <h5>Site Links</h5>
                <ul class="foot">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/categories">Categories</a>
                    </li>
                    <li>
                        <a href="/random">Random</a>
                    </li>
                </ul>
            </div>
            <div class="footer-1">
                <h5>Other Links</h5>
                <ul class="foot">
                    <li>
                        <a href="#">Help & Support</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">About Us</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
            <div class="footer-1">
                <h5>Subscribe</h5>
                <div class="foot">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <form>
                        <div>
                            <input class="form-input" type="email" placeholder="Enter Email...">
                            <button class="form-btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="footer-2">
            Copyright © {{ new Date().getFullYear() }} : Pargol Givehchi - DTT Front-End Test Project
        </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {

}
</script>

<style lang="scss">
$background: #eee;
$title-color: #42b983;
$text-color: #333;
$footer-2-back: #f8f9fa;
#main-footer{
    background: $background;
    .footer{
        padding: 70px 0;
        .main-footer-1{
            display: flex;
            flex-direction: row;
        }
        &-1{
            font-size: 16px;
            color: $title-color;
            width: 33%;
            .form-input {
                display: inline-block;
                width: 60%;
                margin-right: 10px;
                height: 25px; border: none;
            }
            .form-btn {
                display: inline-block;
                width: 35%;
                height: 27px;
                background-color: #42b983;
                border: none;
                color: #fff;
                border-radius: 3px;
            }
            .foot {
                margin: 3px 0 22px 5px;
                padding: 0;
                input[type='submit'] {
                    display: inline-block;
                    font-size: 13px;
                    border: none;
                    background: $title-color;
                    opacity: 1;
                    color: #fff;
                    margin-top: 7px;
                    border-radius: 3px;
                    padding: 3px 60px;
                    outline: none;
                    &:hover {
                        opacity: 0.85;
                        cursor: pointer;
                    }
                }
                input[type='email'] {
                    font-size: 13px;
                    margin-top: 10px;
                    outline: none;
                }
                p {
                    font-size: 13px;
                    color: $text-color;
                    line-height: 1.6;
                    padding-bottom: 5px 0;
                    margin-top: 5px;
                }
                li{
                    list-style: none;
                    line-height: 1.5;
                    a {
                       font-size: 13px;
                       color: $text-color;
                       font-weight: normal;
                       &:hover {
                            color:#0000EE;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        &-2 {
            background: $footer-2-back;
            color: $text-color;
            opacity: 0.7;
            font-size: 14px;
            padding: 10px;
            text-align: center;
            margin-top: 60px;
        }
    }
}
@media screen and (max-width: 800px){
    #main-footer {
        .footer {
            &-1 {
                .form-input {
                width: auto;
                }
                .form-btn {
                    width: 173px;
                    margin-top: 7px;
                }
            }
        }
    }
}
@media screen and (max-width: 450px) {
    #main-footer {
        .footer {
            .main-footer-1 {
                display: flex;
                flex-direction: column;
            }
            &-1 {
                width: 140px;
                .form-btn {
                    width: 173px;
                }
            }
        }
        .footer-2 {
            font-size: 12px;
        }
    }
}
</style>
