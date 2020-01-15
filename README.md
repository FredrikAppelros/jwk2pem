# jwk2pem

A small command line utility for converting cryptographic keys from JWK to PEM format.

## Usage

Just supply the key in JWK format through stdin and you will get the same key back in PEM format through stdout:

    jwk2pem <<< '
    {
      "use": "sig",
      "kty": "RSA",
      "kid": "public:e00d54c9-3f94-461b-9d2c-d0f6f45fa4d6",
      "alg": "RS256",
      "n":   "uIbJbxIEzsSikj8HuDiTrbSJxPHrDoGrWOawY2hlZezknK_LTXf4wxNNG63ERtt6aBn7rikWJzvh3xa5aqVCSLnSDCrmIQ2KRmm-POWYoXKipABsiOELx8SkYXmHxVq_wke1opVRimKJTcjKcoVnnn9tLkrizTOWdqGjjhobvdTc_jEoqSMO5qJQPcmOgOrxsgSJHJnzh0u44TH6a2dGBpYpyAyYZgOoZDs2jtICYgAKJ4Jb_B9KJd34uayuGsB-DunqFED2KNreFyyB5JSu7XI2EBmYri2pmkpP70KqlkMpxSYF0VluTay_RDT_lwx-3QcdyHAvNSheHWPBcEalEG8tVLqezz133I3Fat6WAD0y5mAJD6d1j6yAdS7uDigi3Tf5IvveJRIIQi7b_hYwX5FjWVse4c0b27inpVLMXvQlYEgiy19E5bKykdKXkvdGzFNPrlL2fCHlMlDUOnEWWMnLR2_iSca3TV09YDGylk3CmU3Cw5OUVbqNWc9gcfdt4FrfF5qqEeOEYAya5pigMCKqTNwKqTTKZtEZLdfYdB1yxP1aSt2d7nIwFF6J32fNA6g8Wq01B7R_drw5BY5D5k8Sl8V5QERndGFQYl7W3J3wPuqcHlHZ-q2l5f-DH1d9fLW8zNbYtnDqpQEqN44mLjvGAk3MkwcKsjsbVkFsWF8",
      "e": "AQAB"
    }'