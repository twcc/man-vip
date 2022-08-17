---
sidebar_position: 2
title: '使用者網站'
---

# TWCC FAQs | Portal

<details>

<summary> Q1. Which browsers are supported for TWCC ？</summary>

It is recommended to use the following supported browsers for the best user experience:

|  | Windows7 | Windows10+ | Mac OS 10+ |Ubuntu 16.04+(Linux) |
| -------- | -------- | -------- | -------- |-------- |
| Chrome 70+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     |
|Firefox 62+    | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    |
| Safari 12+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>    | <i class="fa fa-check" aria-hidden="true"></i>     |
| Edge 62+     | <i class="fa fa-check" aria-hidden="true"></i>     | <i class="fa fa-check" aria-hidden="true"></i>     | -     | -     |
| IE9/IE10     | <i class="fa fa-times" aria-hidden="true"></i>     | <i class="fa fa-times" aria-hidden="true"></i>     |  -    |  -      |

</details>

<details>

<summary> Q2. Why is the screen blank after sign-in?</summary>

After TWCC update the new version, a blank screen will be displayed after signing in if your browser stores the previous version cache. Clear the cache to sign in normally.

</details>

<details>

<summary> Q3. What will happen if the password is entered incorrectly continuously？</summary>

If you enter the password incorrectly for 3 consecutive times, you will not be able to sign in for 15 minutes. Please try again later.

</details>

<details>

<summary> Q4. What is the difference between Tenant Admin and Tenant User in using TWCC services?</summary>

The differences between Tenant Admin and Tenant User are role permissions, please refer to [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/role-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2Frole-overview-en) for the differences between the two roles.

</details>


<details>

<summary> Q5. How to check the limit of GPU usage of the project?</summary>

Please refer to "Quota" of [<ins>this document</ins>](https://man.twcc.ai/@twccdocs/doc-service-main-en/https%3A%2F%2Fman.twcc.ai%2F%40twccdocs%2FHJYrLYukr%3Ftype%3Dview%23%25E8%25B3%2587%25E6%25BA%2590%25E9%2585%258D%25E9%25A1%258D%25E7%25AE%25A1%25E7%2590%2586).

</details>

<details>

<summary>

Q6. An error when creating resource:`[i-service] no quota to request resource.user`？

</summary>


If the following error messages occur when you're using services/resources of TWCC, (e.g., create or start a VCS instance, detach the data disk or use container services...etc.):

- `error code：401(Unauthorized)`
- `error message：[i-service] no quota to request resource.user`

They indicate that the credit of the project is insufficient. Please check whether the main wallet or the user's sub wallet of your project is still enough for using services.

</details>