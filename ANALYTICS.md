# Analytics

Visits and events are tracked via Google Analytics. The following taxonomy aids in the correct classification of each event:

| Interaction       | Category | Action      | Label | Value                                          |
| ----------------- | -------- | ----------- | ----- | ---------------------------------------------- |
| Activate a seal   | board    | toggle_seal | on    | (Number 1-16 representing activated seal)      |
| Deactivate a seal | board    | toggle_seal | off   | (Number 1-16 representing activated seal)      |
| Reset board       | board    | reset       |       | (Number representing the total seals reset)    |
| Shuffle seals     | board    | shuffle     |       | (Number representing the total seals shuffled) |

All information pushed into Google Analytics is in lowercase format.
