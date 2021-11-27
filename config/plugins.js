

module.exports = ({  }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: 'AKIAVUEMN6U75QGX7KHL',
      secretAccessKey:'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',
      region: 'ap-south-1',
      params: {
        Bucket: 'pragictsrsa',
      },
    },
  },
})
