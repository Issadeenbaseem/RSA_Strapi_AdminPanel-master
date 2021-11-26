module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId:'AKIAQ5MIS7W76X5JKA7E',
      secretAccessKey:'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',
      region: 'ap-south-1',
      params: {
        Bucket: 'pragictsstrapidemo',
      },
    },
  },
});

