---
sidebar_position: 3
---

# Interactive container life cycle

You perform actions on interactive containers- from creation to deletion, the state of the containers is closely related to resources, data, and billing. This article will explain in detail all the relationships between life cycle states, meanings, and billing of the container from creation to deletion

The transition between the action and the container state:

![](https://cos.twcc.ai/SYS-MANUAL/uploads/upload_b6d8c43ef53810887b5d5fc25b6f3baa.png)


- The relationship between container state, state description, and usage billing is shown in the following table:

| Container state | State description |Container usage billing | 
| -------- | -------- | -------- |
| `Initializing`     | The container is preparing to enter `Ready` state.<br/> Create the container: the system is allocating resources and initializing the container<br/>| Not billed     | 
| `Ready`     | The initialization has been completed, and the container can be connected and used normally|Billed     | 
| `Deleting`     | The container is being deleted and will be permanently deleted.|Not billed         | 


## Create a container

When you create a container, the system allocates resources and initializes the container, and the container enters in **`Initializing`** state. The container still cannot be used but will enter in **`Ready`** state  soon. Once 
the container enters in the **`Ready`** state, you can perform the following actions:

- <i class="fa fa-check" aria-hidden="true"></i> Connect to the container
- <i class="fa fa-check" aria-hidden="true"></i> Create container duplicates
- <i class="fa fa-check" aria-hidden="true"></i> Associate, dissociate service ports... and other operations.

:::info
Please refer to the creation steps [<ins>Create container</ins>](/@twccdocs/guide-ccs-create-en).
:::


## Delete a container

If you want to delete a container permanently and no longer use it, after clicking delete, the container enters in the **`Deleting`** state, and <ins>**it is not billed anymore**</ins>. After the deletion is complete, the container will disappear from the list.

Notice of deletion:
- The data in the container system directory will be permanently deleted. If you need to keep it, you can create [Container duplicate](https://man.twcc.ai/@twccdocs/guide-ccs-duplicate-en).
- /home, /work data (Hyper File System storage space) will be retained and will not be removed as the container is deleted.

:::info
For deletion steps, see [<ins>Delete a container</ins>](/@twccdocs/guide-ccs-manage-en) for more information.
:::