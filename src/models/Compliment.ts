import { Entity, PrimaryColumn, Column, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from 'uuid'

import { User } from '../models/User'
import { Tag } from '../models/Tag'

@Entity('compliments')
export class Compliment {
  @PrimaryColumn()
  id: string

  @Column()
  user_sender: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User

  @Column()
  user_receiver: string

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  userReceiver: User

  @Column()
  tag_id: string

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string

  @CreateDateColumn()
  created_at: Date

  constructor() {
    if (!this.id) this.id = uuid()
  }
}
