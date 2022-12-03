import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  EntryPointChanged,
  OwnerChanged,
  RecoveryAccountChanged,
  Switch,
  SwitchRequest
} from "../generated/InfinityAccount/InfinityAccount"

export function createEntryPointChangedEvent(
  oldEntryPoint: Address,
  newEntryPoint: Address
): EntryPointChanged {
  let entryPointChangedEvent = changetype<EntryPointChanged>(newMockEvent())

  entryPointChangedEvent.parameters = new Array()

  entryPointChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldEntryPoint",
      ethereum.Value.fromAddress(oldEntryPoint)
    )
  )
  entryPointChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newEntryPoint",
      ethereum.Value.fromAddress(newEntryPoint)
    )
  )

  return entryPointChangedEvent
}

export function createOwnerChangedEvent(
  oldOwner: Address,
  newOwner: Address
): OwnerChanged {
  let ownerChangedEvent = changetype<OwnerChanged>(newMockEvent())

  ownerChangedEvent.parameters = new Array()

  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  ownerChangedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownerChangedEvent
}

export function createRecoveryAccountChangedEvent(
  account: Address
): RecoveryAccountChanged {
  let recoveryAccountChangedEvent = changetype<RecoveryAccountChanged>(
    newMockEvent()
  )

  recoveryAccountChangedEvent.parameters = new Array()

  recoveryAccountChangedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return recoveryAccountChangedEvent
}

export function createSwitchEvent(
  switchTriggerBlockDiff: BigInt,
  switchAccount: Address
): Switch {
  let switchEvent = changetype<Switch>(newMockEvent())

  switchEvent.parameters = new Array()

  switchEvent.parameters.push(
    new ethereum.EventParam(
      "switchTriggerBlockDiff",
      ethereum.Value.fromUnsignedBigInt(switchTriggerBlockDiff)
    )
  )
  switchEvent.parameters.push(
    new ethereum.EventParam(
      "switchAccount",
      ethereum.Value.fromAddress(switchAccount)
    )
  )

  return switchEvent
}

export function createSwitchRequestEvent(
  switchRequestBlockNumber: BigInt
): SwitchRequest {
  let switchRequestEvent = changetype<SwitchRequest>(newMockEvent())

  switchRequestEvent.parameters = new Array()

  switchRequestEvent.parameters.push(
    new ethereum.EventParam(
      "switchRequestBlockNumber",
      ethereum.Value.fromUnsignedBigInt(switchRequestBlockNumber)
    )
  )

  return switchRequestEvent
}
