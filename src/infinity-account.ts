import {
  EntryPointChanged as EntryPointChangedEvent,
  OwnerChanged as OwnerChangedEvent,
  RecoveryAccountChanged as RecoveryAccountChangedEvent,
  Switch as SwitchEvent,
  SwitchRequest as SwitchRequestEvent
} from "../generated/InfinityAccount/InfinityAccount"
import {
  EntryPointChanged,
  OwnerChanged,
  RecoveryAccountChanged,
  Switch,
  SwitchRequest
} from "../generated/schema"

export function handleEntryPointChanged(event: EntryPointChangedEvent): void {
  let entity = new EntryPointChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldEntryPoint = event.params.oldEntryPoint
  entity.newEntryPoint = event.params.newEntryPoint

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerChanged(event: OwnerChangedEvent): void {
  let entity = new OwnerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRecoveryAccountChanged(
  event: RecoveryAccountChangedEvent
): void {
  let entity = new RecoveryAccountChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwitch(event: SwitchEvent): void {
  let entity = new Switch(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.switchTriggerBlockDiff = event.params.switchTriggerBlockDiff
  entity.switchAccount = event.params.switchAccount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwitchRequest(event: SwitchRequestEvent): void {
  let entity = new SwitchRequest(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.switchRequestBlockNumber = event.params.switchRequestBlockNumber

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
